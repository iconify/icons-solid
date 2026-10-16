import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c978-abib.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="c978-abib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-number-2-fill"} {...others} />);
}

export default Component;
