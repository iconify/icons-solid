import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiwcx9z6c.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uiwcx9z6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-ubuntu"} {...others} />);
}

export default Component;
