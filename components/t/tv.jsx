import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_n7y0bah.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="m_n7y0bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:tv"} {...others} />);
}

export default Component;
