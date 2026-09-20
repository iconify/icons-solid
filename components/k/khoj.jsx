import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsqb4ibam.css';
import '../../css/c/cvq3jvbuv.css';
import '../../css/j/j4gvrkzwf.css';
import '../../css/a/advvqfnsf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gsqb4ibam"/><path class="cvq3jvbuv"/><path class="j4gvrkzwf"/><path class="advvqfnsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:khoj"} {...others} />);
}

export default Component;
