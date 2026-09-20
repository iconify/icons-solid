import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-wsh-5xy.css';
import '../../css/y/yr5lehd0q.css';
import '../../css/w/w-kkr8a6v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-wsh-5xy"/><path class="yr5lehd0q"/><path class="w-kkr8a6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-forward-mail"} {...others} />);
}

export default Component;
