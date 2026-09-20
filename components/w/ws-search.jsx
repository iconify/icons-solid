import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqq917u9h.css';
import '../../css/a/ajn-ykgrr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bqq917u9h"/><path clip-rule="evenodd" class="ajn-ykgrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ws-search"} {...others} />);
}

export default Component;
