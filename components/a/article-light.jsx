import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6m6l-blr.css';
import '../../css/a/add8fqwim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6m6l-blr"/><path class="add8fqwim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-light"} {...others} />);
}

export default Component;
