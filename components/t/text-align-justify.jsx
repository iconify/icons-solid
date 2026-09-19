import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo1m1lbyx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bo1m1lbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:text-align-justify"} {...others} />);
}

export default Component;
