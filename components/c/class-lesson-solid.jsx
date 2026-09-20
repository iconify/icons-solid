import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyc7y3bbj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qyc7y3bbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:class-lesson-solid"} {...others} />);
}

export default Component;
