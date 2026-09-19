import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj15hgbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj15hgbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:triangle-warning"} {...others} />);
}

export default Component;
