import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1p2nbbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1p2nbbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:file-edit"} {...others} />);
}

export default Component;
