import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e41i3kafz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e41i3kafz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:archive-box-arrow-up-16-solid"} {...others} />);
}

export default Component;
