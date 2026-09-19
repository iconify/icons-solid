import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x30i7ibvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x30i7ibvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:credit-card-check-alt-filled"} {...others} />);
}

export default Component;
