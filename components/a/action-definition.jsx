import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/genudbc9p.css';
import '../../css/a/awir01b8j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="genudbc9p"/><path class="awir01b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:action-definition"} {...others} />);
}

export default Component;
