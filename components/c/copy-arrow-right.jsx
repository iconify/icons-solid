import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxb2f-u5j.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qxb2f-u5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:copy-arrow-right"} {...others} />);
}

export default Component;
