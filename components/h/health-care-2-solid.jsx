import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfv8tcc4i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="sfv8tcc4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:health-care-2-solid"} {...others} />);
}

export default Component;
