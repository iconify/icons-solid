import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgwm9bc5g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qgwm9bc5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:geo-fill"} {...others} />);
}

export default Component;
