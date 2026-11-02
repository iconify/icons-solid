import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k57yldbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k57yldbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gender-trans-solid"} {...others} />);
}

export default Component;
