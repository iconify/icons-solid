import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggsig13zw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ggsig13zw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:photo-plus-20-solid"} {...others} />);
}

export default Component;
