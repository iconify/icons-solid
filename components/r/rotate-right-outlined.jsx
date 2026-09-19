import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m640nac0w.css';
import '../../css/b/bbh__hbjv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="m640nac0w"/><path class="bbh__hbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:rotate-right-outlined"} {...others} />);
}

export default Component;
