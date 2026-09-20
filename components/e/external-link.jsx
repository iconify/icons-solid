import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plhb_68gt.css';
import '../../css/x/xwzdy07rg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="plhb_68gt"/><path class="xwzdy07rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:external-link"} {...others} />);
}

export default Component;
