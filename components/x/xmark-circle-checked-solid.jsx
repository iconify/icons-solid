import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3cgnmb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v3cgnmb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:xmark-circle-checked-solid"} {...others} />);
}

export default Component;
