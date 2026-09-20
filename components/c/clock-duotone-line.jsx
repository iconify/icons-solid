import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-fwvxbba.css';
import '../../css/j/jkgvhzbvu.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGabB7geOy"><g class="ft5dv1b6b"><circle class="q-fwvxbba"/><path class="jkgvhzbvu"/></g></mask></defs><path mask="url(#SVGabB7geOy)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:clock-duotone-line"} {...others} />);
}

export default Component;
