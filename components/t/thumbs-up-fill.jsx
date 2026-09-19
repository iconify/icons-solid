import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy1i_6bbo.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dy1i_6bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:thumbs-up-fill"} {...others} />);
}

export default Component;
