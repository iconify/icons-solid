import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6cmpy5to.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="t6cmpy5to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-chevron-right-fill"} {...others} />);
}

export default Component;
