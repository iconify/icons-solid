import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abwvd3b5g.css';
import '../../css/t/t7eub0bye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abwvd3b5g"/><path class="t7eub0bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vanio"} {...others} />);
}

export default Component;
