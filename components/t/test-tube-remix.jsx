import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez_cv9rsg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ez_cv9rsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:test-tube-remix"} {...others} />);
}

export default Component;
