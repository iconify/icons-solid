import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eocglkw9k.css';
import '../../css/a/awir01b8j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eocglkw9k"/><path class="awir01b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:requirement-definition"} {...others} />);
}

export default Component;
