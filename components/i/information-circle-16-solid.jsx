import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufm3krb1c.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ufm3krb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:information-circle-16-solid"} {...others} />);
}

export default Component;
