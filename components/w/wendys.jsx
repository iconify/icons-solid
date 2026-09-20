import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le0cgmbgy.css';
import '../../css/s/swqxefodk.css';
import '../../css/c/ci0zejzuq.css';

const viewBox = {"width":1230,"height":526};
const content = `<path class="le0cgmbgy"/><path class="swqxefodk"/><path class="ci0zejzuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wendys"} {...others} />);
}

export default Component;
