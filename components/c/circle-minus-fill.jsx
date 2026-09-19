import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7_8rh3kz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r7_8rh3kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-minus-fill"} {...others} />);
}

export default Component;
