import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co2cki_7i.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="co2cki_7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:person-badge-minus-fill"} {...others} />);
}

export default Component;
