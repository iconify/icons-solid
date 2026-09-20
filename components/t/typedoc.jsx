import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5q9y884s.css';
import '../../css/n/ncwam8blf.css';
import '../../css/c/cnm88kb6a.css';
import '../../css/b/bzav01b4o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t5q9y884s"/><path class="ncwam8blf"/><path class="cnm88kb6a"/><path class="bzav01b4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:typedoc"} {...others} />);
}

export default Component;
