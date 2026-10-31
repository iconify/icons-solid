import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5d26zbvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5d26zbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:inbox-arrow-up"} {...others} />);
}

export default Component;
