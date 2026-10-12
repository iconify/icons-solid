import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttki8ltre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttki8ltre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-up-start"} {...others} />);
}

export default Component;
