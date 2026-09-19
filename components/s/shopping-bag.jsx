import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho_irrb9b.css';
import '../../css/v/vzi465tms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ho_irrb9b"/><path class="duoicon-primary-layer vzi465tms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:shopping-bag"} {...others} />);
}

export default Component;
