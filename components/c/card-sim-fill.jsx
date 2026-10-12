import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajh3pwb5v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 4C4 2.3431 5.3431 1 7 1L13.1716 1C13.9672 1 14.7303 1.3161 15.2929 1.8787L19.1213 5.7071C19.6839 6.2697 20 7.0328 20 7.8284L20 20C20 21.6569 18.6569 23 17 23L7 23C5.3431 23 4 21.6569 4 20L4 4ZM8 13L8 17C8 18.1046 8.8954 19 10 19L14 19C15.1046 19 16 18.1046 16 17L16 13C16 11.8954 15.1046 11 14 11L10 11C8.8954 11 8 11.8954 8 13ZM10 13L14 13L14 17L10 17L10 13Z");
}
</style><path clip-rule="evenodd" class="ajh3pwb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:card-sim-fill"} {...others} />);
}

export default Component;
