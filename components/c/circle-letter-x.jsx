import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqs_9jtvc.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pqs_9jtvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-letter-x"} {...others} />);
}

export default Component;
