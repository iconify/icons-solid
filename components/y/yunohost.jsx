import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5g66wbkc.css';
import '../../css/u/uk5liicmj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b5g66wbkc"/><path class="uk5liicmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yunohost"} {...others} />);
}

export default Component;
