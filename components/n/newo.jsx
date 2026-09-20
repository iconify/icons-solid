import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usp1xgb4w.css';
import '../../css/v/v0z-2fb7a.css';
import '../../css/z/zy-_uac9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="usp1xgb4w"/><path class="v0z-2fb7a"/><path class="zy-_uac9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:newo"} {...others} />);
}

export default Component;
