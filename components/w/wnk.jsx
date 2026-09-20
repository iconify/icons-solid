import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyq886b0l.css';
import '../../css/d/dc0_ty-6m.css';
import '../../css/c/c5hn-ccrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyq886b0l"/><path class="dc0_ty-6m"/><path class="c5hn-ccrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wnk"} {...others} />);
}

export default Component;
