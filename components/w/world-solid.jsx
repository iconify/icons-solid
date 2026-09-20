import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q01kas6kr.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="q01kas6kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:world-solid"} {...others} />);
}

export default Component;
