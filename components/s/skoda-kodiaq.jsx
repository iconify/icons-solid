import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9y3e2baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9y3e2baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:skoda-kodiaq"} {...others} />);
}

export default Component;
