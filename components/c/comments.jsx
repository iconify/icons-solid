import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aao_zi_4p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aao_zi_4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:comments"} {...others} />);
}

export default Component;
