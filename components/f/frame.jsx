import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu1i2oh_t.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="iu1i2oh_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:frame"} {...others} />);
}

export default Component;
