import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7y0dmb9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="j7y0dmb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graphic-template-website-ui-remix"} {...others} />);
}

export default Component;
