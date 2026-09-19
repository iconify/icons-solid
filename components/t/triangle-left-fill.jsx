import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv2z8xbnp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qv2z8xbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:triangle-left-fill"} {...others} />);
}

export default Component;
