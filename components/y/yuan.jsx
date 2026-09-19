import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/y/y9o8qmpxw.css';
import '../../css/f/f7f3s988y.css';
import '../../css/m/m7g34abuh.css';
import '../../css/o/odxdb0onu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="y9o8qmpxw"/><path class="f7f3s988y"/><path class="m7g34abuh"/><path class="odxdb0onu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:yuan"} {...others} />);
}

export default Component;
