import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diha6obbz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="diha6obbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:warning-diamond-solid"} {...others} />);
}

export default Component;
