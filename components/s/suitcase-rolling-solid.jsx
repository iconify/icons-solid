import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npzehtboi.css';
import '../../css/o/o887d5btn.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="npzehtboi"/><path class="o887d5btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:suitcase-rolling-solid"} {...others} />);
}

export default Component;
