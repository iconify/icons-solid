import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrwnz618c.css';
import '../../css/f/fsg-qo40i.css';
import '../../css/g/gny4e5dob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mrwnz618c"/><path class="fsg-qo40i"/><path class="gny4e5dob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image"} {...others} />);
}

export default Component;
