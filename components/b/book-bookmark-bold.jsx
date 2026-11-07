import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apdbvacmy.css';
import '../../css/u/u_m41fbyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="apdbvacmy"/><path class="u_m41fbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-bold"} {...others} />);
}

export default Component;
