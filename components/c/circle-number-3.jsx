import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv9qadb-e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qv9qadb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-number-3"} {...others} />);
}

export default Component;
