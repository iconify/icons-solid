import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq26h3bso.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="eq26h3bso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:refresh-alt-solid"} {...others} />);
}

export default Component;
