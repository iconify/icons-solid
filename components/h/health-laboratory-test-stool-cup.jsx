import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-6wtf2xf.css';
import '../../css/h/h4na1ogqb.css';
import '../../css/y/y7f7bhyxg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r-6wtf2xf"/><path class="h4na1ogqb"/><path class="y7f7bhyxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-laboratory-test-stool-cup"} {...others} />);
}

export default Component;
